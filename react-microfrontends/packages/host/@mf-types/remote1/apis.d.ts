
    export type RemoteKeys = 'remote1/Header';
    type PackageType<T> = T extends 'remote1/Header' ? typeof import('remote1/Header') :any;