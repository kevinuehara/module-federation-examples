
    export type RemoteKeys = 'rspack_js_entry_provider/Lodash';
    type PackageType<T> = T extends 'rspack_js_entry_provider/Lodash' ? typeof import('rspack_js_entry_provider/Lodash') :any;