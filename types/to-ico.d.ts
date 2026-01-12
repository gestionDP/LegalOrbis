declare module 'to-ico' {
  function toIco(
    input: (string | Buffer)[],
    options?: {
      sizes?: number[];
    }
  ): Promise<Buffer>;
  
  export = toIco;
}



