import { CreateAspect } from './create.aspect';
import { MainRuntime } from '../cli/cli.aspect';
import { ExtensionManifest } from '@teambit/harmony';
import { WorkspaceExt } from '../workspace';
import { provideCreate } from './create.provider';
import { CLIExtension } from '../cli';

export default {
  name: '@teambit/create',
  dependencies: [CLIExtension, WorkspaceExt],
  provider: provideCreate,
} as ExtensionManifest;

CreateAspect.addRuntime(CreateMain);
