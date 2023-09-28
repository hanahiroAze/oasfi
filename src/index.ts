#!/usr/bin/env node

import * as fsPromise from "fs/promises";
import * as Papa from "papaparse";
import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";
import { TokenTransfer } from "./module/TokenTransfer";

interface CommandArgs {
  input: string;
  output: string;
  chain: string;
}

async function processCsv(args: CommandArgs) {
  const { chain, input, output } = args;
  const tokenTransfer = new TokenTransfer(chain);
  const csvContent = await fsPromise.readFile(input, "utf-8");
  const result = Papa.parse(csvContent, { header: true });
  const data = await tokenTransfer.handleDuplicateTokenTransfer(result.data);
  await tokenTransfer.saveCsvToFile(output, Papa.unparse(data));
}

void yargs(hideBin(process.argv))
  .command(
    "<input> <output> <chain>",
    "Check token balance and remove duplicate records from a CSV",
    {
      input: {
        describe: "Input CSV file",
        type: "string",
        demandOption: true,
      },
      output: {
        describe: "Output CSV file",
        type: "string",
        demandOption: true,
      },
      chain: {
        describe: "Chain name",
        type: "string",
        demandOption: true,
      },
    },
    async (argv: Arguments<CommandArgs>) => {
      try {
        await processCsv(argv);
      } catch (error) {
        console.error(`An error occurred: ${error.message}`);
      }
    }
  )
  .help().argv;
