# TypeScript Project README

## Getting Started

### 1. Generate tsconfig.json

To create a default TypeScript configuration file, run:

```powershell
tsc --init
```

This will generate a `tsconfig.json` in your project root. You can customize it as needed.

### 2. Compile TypeScript Files

To compile all `.ts` files according to your `tsconfig.json` settings:

```powershell
tsc
```

This will output compiled `.js` files to the folder specified in `outDir` (e.g., `dist`).

### 3. Run the Compiled JavaScript

Use Node.js to run the output file. For example:

```powershell
node .\dist\arraysAndTuples.js
```

Replace the filename with the desired compiled file.

---

## Summary of Programs and Concepts

### arraysAndTuples.ts

- Demonstrates arrays, tuples, readonly arrays/tuples, and updating tuple values.
- Example: storing student data and updating scores.

### classAndInterface.ts

- Shows how to use interfaces as contracts for classes, and how classes implement interfaces.
- Example: `Shape` interface, `Rectangle` and `Circle` classes.

### enumsAndType.ts

- Covers type aliases for tuples and objects, and usage of enums for named constants.
- Example: `Student` tuple, `Animal` object, `Direction` enum.

### functions.ts

- Explains function type annotations, optional/default/rest parameters, and a practical calculator function using union types.

### literals.ts

- Demonstrates literal types (string, number, boolean) and unions of literals for strict value constraints.

### nullableCheck.ts

- Shows optional chaining and nullish coalescing for safe property access and default values in objects with optional properties.

### objects.ts

- Covers object types, readonly properties, and index signatures for flexible property addition.
- Example: `Employee` and `Product` types.

### variables.ts

- Explains variable type declarations, union types, `any` type, and type aliases for custom variable types.

---

Each file is self-contained and can be compiled and run to see the output and TypeScript features in action.
