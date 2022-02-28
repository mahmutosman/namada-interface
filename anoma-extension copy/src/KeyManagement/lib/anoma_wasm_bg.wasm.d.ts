/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_publickey_free(a: number): void;
export function __wbg_keypair_free(a: number): void;
export function generate_mnemonic(a: number, b: number): void;
export function keypair_from_mnemonic(a: number, b: number, c: number): number;
export function keypair_serialize(a: number): number;
export function keypair_deserialize(a: number, b: number): void;
export function keypair_from_pointer_to_js_value(a: number): number;
export function keypair_from_js_value_to_pointer(a: number, b: number): void;
export function keypair_encrypt_with_password(a: number, b: number, c: number, d: number): void;
export function keypair_decrypt_with_password(a: number, b: number, c: number, d: number): number;
export function __wbg_signature_free(a: number): void;
export function signature_serialize(a: number, b: number): void;
export function signature_deserialize(a: number, b: number, c: number): void;
export function sign(a: number, b: number, c: number, d: number): void;
export function verify_signature(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function __wbg_tx_free(a: number): void;
export function make_transfer(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number): void;
export function __wbg_address_free(a: number): void;
export function address_encoded(a: number, b: number): void;
export function address_from_keypair(a: number): number;
export function address_decode(a: number, b: number, c: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
