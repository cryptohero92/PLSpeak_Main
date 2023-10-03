
export async function Validate(schema, data) {
  let error = "";
  await schema.validate(data).catch(function (err) {
    error = {
      path: err.path,
      message: (err.errors || [])
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(", "),
    };
  });
  return error;
}

export function toUsd(amount) {
  return (amount / 100).toFixed(2);
}

export function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}  
