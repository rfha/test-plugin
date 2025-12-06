// src/index.ts
import type {
    RemotePluginModule,
    RemotePluginManifest,
    DemoPlugin
} from "@rfha/plugin-api";
import { PLUGIN_API_VERSION } from "@rfha/plugin-api";

// Manifest embedded in the JS module (matches plugin.manifest.json logically)
const manifest: RemotePluginManifest = {
    kind: "demo-plugin",
    apiVersion: PLUGIN_API_VERSION
};

// The plugin: just a function returning a string
const createPlugin = (): DemoPlugin => {
    return () => "Hello from the demo plugin!";
};

// Full module shape expected by the host
const module: RemotePluginModule = {
    manifest,
    createPlugin
};

export default module;
