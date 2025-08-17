---
title: "Watch Component in React Hook Form"
description: "Small optimizations on large forms with Watch component in React Hook Form"
date: "2024-03-20"
---

When building large forms with [React Hook Form](https://react-hook-form.com), it's common to have fields that depend on the value of others. For example, you might want to disable a text field based on a checkbox:

```tsx
function Form() {
  const isEnabled = watch("office.enabled");
  return (
    <div>
      <Controller
        control={control}
        name="office.value"
        render={({ field, fieldState: { invalid, error } }) => (
          <FormControl>
            <Label>Description</Label>
            <OfficeSelect {...field} error={invalid} disabled={!isEnabled} />
            <ErrorMessage>{error?.message}</ErrorMessage>
          </FormControl>
        )}
      />

      {/* Rest of the form */}
    </div>
  );
}
```

This works fine for small forms, but in larger forms it triggers a re-render of the entire component whenever the watched value changes.

### Isolating re-renders

A simple solution is to move dependent fields into separate components. But sometimes you only need a single field to react to changes. In that case, you can create a small wrapper around `useWatch`:

```tsx
// use-watch.tsx
export function Watch<
  TFieldValues extends FieldValues = FieldValues,
  TFieldNames extends readonly FieldPath<TFieldValues>[] = readonly FieldPath<TFieldValues>[]
>({
  control,
  name,
  children,
}: {
  control: Control<TFieldValues>;
  name: readonly [...TFieldNames];
  children: (
    value: FieldPathValues<TFieldValues, TFieldNames>
  ) => React.ReactNode;
}) {
  const value = useWatch({ control, name });
  return typeof children === "function" ? children(value) : children;
}
```

Usage:

```tsx
function Form() {
  return (
    <div>
      <Watch control={control} name={["office.enabled"]}>
        {([isEnabled]) => (
          <Controller
            control={control}
            name="office.value"
            render={({ field, fieldState: { invalid, error } }) => (
              <FormControl>
                <Label>Description</Label>
                <OfficeSelect
                  {...field}
                  error={invalid}
                  disabled={!isEnabled}
                />
                <ErrorMessage>{error?.message}</ErrorMessage>
              </FormControl>
            )}
          />
        )}
      </Watch>

      {/* Rest of the form */}
    </div>
  );
}
```

Now

- Only the field inside `Watch` re-renders when its value changes
- No need to break the form into many separate components
- Keeps your large forms performant and easy to maintain
