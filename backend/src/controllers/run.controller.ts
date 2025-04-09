// backend/src/controllers/run.controller.ts
import { Request, Response } from 'express';
import { exec } from 'child_process';
import path from 'path';
import { RunRequest } from '../types/run.types';

export const handleRun = (req: Request<{}, {}, RunRequest>, res: Response) => {
  const { script, password } = req.body;

  if (!script) {
    return res.status(400).send('❌ Script name is required.');
  }

  // Path to the shell scripts folder
  const scriptPath = path.resolve(__dirname, '../../scripts/', `${script}.sh`);

  // const wslScriptPath = scriptPath.replace('D:\\', '/mnt/d/').replace(/\\/g, '/'); /

  // Execute the shell script
  const command = password
  ? `PASSWORD="${password}" bash "${scriptPath}"`
  : `bash "${scriptPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Script error: ${stderr}`); 
      return res.status(500).send(stderr);
    }
    res.send(stdout); // Send the script output to frontend
  });
};
