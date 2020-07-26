import 'next';
declare module 'next' {
    export interface NextPageContext {
        xhr: XMLHttpRequest;
    }
}
