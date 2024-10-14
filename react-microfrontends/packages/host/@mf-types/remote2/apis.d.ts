
    export type RemoteKeys = 'remote2/Button';
    type PackageType<T> = T extends 'remote2/Button' ? typeof import('remote2/Button') :any;