/* tslint:disable */
/* eslint-disable */
/**
 * @param {Color} color
 * @returns {Color}
 */
export function enum_echo(color: Color): Color;
/**
 * @param {Color | undefined} [color]
 * @returns {Color | undefined}
 */
export function option_enum_echo(color?: Color): Color | undefined;
/**
 * @param {Color} color
 * @returns {"green" | "yellow" | "red"}
 */
export function get_name(color: Color): "green" | "yellow" | "red";
/**
 * @param {"green" | "yellow" | "red" | undefined} [color]
 * @returns {"green" | "yellow" | "red" | undefined}
 */
export function option_string_enum_echo(color?: "green" | "yellow" | "red"): "green" | "yellow" | "red" | undefined;
/**
 * A color.
 */
export enum Color {
  /**
   * Green as a leaf.
   */
  Green = 0,
  /**
   * Yellow as the sun.
   */
  Yellow = 1,
  /**
   * Red as a rose.
   */
  Red = 2,
}
export enum ImplicitDiscriminant {
  A = 0,
  B = 1,
  C = 42,
  D = 43,
}
