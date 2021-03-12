declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT?: number;
        HASH_KEY: string;
      }
    }
  }
  export{}