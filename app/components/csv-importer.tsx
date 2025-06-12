import Importer from "hello-csv/react";
import "hello-csv/react/index.css";

export function CSVImporter() {
  return (
    <Importer
      sheets={[
        {
          id: "employees",
          label: "Employees",
          columns: [
            {
              label: "Name",
              id: "name",
              type: "string",
              validators: [{ validate: "required" }],
            },
            {
              label: "Email",
              id: "email",
              type: "string",
              validators: [
                { validate: "required" },
                { validate: "unique", error: "This email is not unique" },
                {
                  validate: "regex_matches",
                  regex:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  error: "This email is not valid",
                },
              ],
            },
            {
              label: "Phone Number",
              id: "phone_number",
              type: "string",
              validators: [{ validate: "required" }],
            },
            { label: "City", id: "city", type: "string" },
            {
              label: "State",
              id: "state",
              type: "string",
              isReadOnly: true,
              transformers: [{ transformer: "state_code" }],
            },
          ],
        },
        {
          id: "companies",
          label: "Companies",
          columns: [
            {
              label: "Company",
              id: "company",
              type: "string",
              validators: [{ validate: "required" }],
            },
            {
              label: "Industry",
              id: "industry",
              type: "enum",
              typeArguments: {
                values: [
                  { label: "Tech", value: "tech" },
                  { label: "Finance", value: "finance" },
                ],
              },
              validators: [{ validate: "required" }],
            },
            {
              label: "Name",
              id: "name",
              type: "reference",
              typeArguments: {
                sheetId: "employees",
                sheetColumnId: "name",
              },
              validators: [{ validate: "required" }],
            },
          ],
        },
      ]}
      onComplete={(data) => {
        console.log(data);
        return Promise.resolve();
      }}
      persistenceConfig={{ enabled: true }}
    />
  );
}
