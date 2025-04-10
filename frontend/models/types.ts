export interface CpuStatus {
    core: number;
    status: string; // example: "5.0%"
  }
  

export interface MemoryStatus {
    memory: {
      total: string;         // Total memory (e.g., "7.6GiB")
      used: string;          // Used memory (e.g., "5.8GiB")
      free: string;          // Free memory (e.g., "1.1GiB")
      shared: string;        // Shared memory (e.g., "1.0GiB")
      buff_cache: string;    // Buffers and cache memory (e.g., "2.1GiB")
      available: string;     // Available memory (e.g., "1.8GiB")
    };
    swap: {
      total: string;         // Total swap memory (e.g., "7.9GiB")
      used: string;          // Used swap memory (e.g., "1.2GiB")
      free: string;          // Free swap memory (e.g., "6.7GiB")
    };
  }
  

  export interface DisksStatus {
    device: string;
    size: string;
    used: string;
    available: string;
    usage: string;
    mount: string;
  }
  
  // types.ts
export interface NetworkUsage {
  interface: string;
  download_kbps: number;
  upload_kbps: number;
}

export interface OverviewData {
  cpu: {
    usage: string;
    idle: string;
  };
  memory: {
    total: string;
    used: string;
    free: string;
  };
  disk: {
    total: string;
    free: string;
    swap: string;
    bin: string;
    tmp: string;
  };
  network: {
    ssid: string;
    ip: string;
    mac: string;
    gateway: string;
  };
};

export interface TelegramData {
  message: string;
  teamMembers: string[];
};