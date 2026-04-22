/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_ENABLE_META_CAPI?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
