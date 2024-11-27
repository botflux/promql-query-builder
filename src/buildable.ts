/**
 * The basic building block to build PromQL queries.
 * Using this simple abstraction, we can compose constructs
 * to be build complex queries.
 */
export interface Buildable {
    /**
     * Build the current construct.
     */
    build(): string
}