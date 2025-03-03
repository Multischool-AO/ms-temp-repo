import { useCategoryEndChild } from "@/api-hooks/categories/get-end-child";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ProductFormProps } from "@/lib/types/types";
import { Button, Input, Select, SelectItem, Textarea } from "@heroui/react";

const ProductDetails = ({ form }: ProductFormProps) => {
  function generateSlug() {
    const name = form.getValues("title");
    if (name) {
      const words = name.split(" ");
      let slug = "";

      // Pega o primeiro caractere da primeira palavra
      if (words[0]) {
        slug += words[0][0].toUpperCase();
      }

      // Pega os 3 primeiros caracteres da segunda palavra, se existir
      if (words[1]) {
        slug += words[1].slice(0, 3).toUpperCase();
      }

      // Adiciona o traço e um número aleatório de 0 a 9
      const randomNum = Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9
      slug += "-" + randomNum;

      // Define o valor do slug no formulário
      form.setValue("slug", slug);
    }
  }

  const { data: categories } = useCategoryEndChild();
  return (
    <div className="flex-1 p-5 pe-3">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                isRequired
                label="Curso"
                labelPlacement="outside"
                placeholder="Insira o curso"
                variant="faded"
                radius="sm"
                classNames={{
                  label: "font-medium z-0",
                  inputWrapper:
                    "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50",
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="slug"
        render={({ field }) => (
          <FormItem className="mt-3">
            <FormControl style={{ margin: "0" }}>
              <div className="flex items-end gap-2">
                <Input
                  {...field}
                  isRequired
                  label="Gerar identificador"
                  labelPlacement="outside"
                  placeholder="Clique no botão para gerar o identificador"
                  variant="faded"
                  radius="sm"
                  classNames={{
                    label: "font-medium z-0",
                    inputWrapper:
                      "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50",
                  }}
                />
                <Button type="button" onClick={generateSlug}>
                  Gerar
                </Button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="shortDescription"
        render={({ field }) => (
          <FormItem className="mt-9">
            <FormControl>
              <Input
                {...field}
                label="Capacidade"
                labelPlacement="outside"
                placeholder="Insira a capacidade de estudantes"
                variant="faded"
                radius="sm"
                classNames={{
                  label: "font-medium z-0",
                  inputWrapper:
                    "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50",
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="mt-3">
            <FormControl>
              <Textarea
                placeholder="Semestre"
                label="Semestre/Ano"
                labelPlacement="outside"
                radius="sm"
                variant="faded"
                classNames={{
                  label: "text-sm font-medium z-0",
                  inputWrapper:
                    "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50",
                }}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}
      {/* <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2"> */}
      <FormField
        control={form.control}
        name="categoryId"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select
                placeholder="Selecione o semestre"
                label="Semestre"
                labelPlacement="outside"
                onChange={field.onChange}
                selectedKeys={field.value ? [field.value] : []}
                radius="sm"
                isRequired
                variant="bordered"
                classNames={{
                  label: "text-sm font-medium z-0",
                  trigger:
                    "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50 mt-1 h-unit-10",
                }}
              >
                {/* Gerar os semestres de 1 a 11 */}
                {[...Array(11).keys()].map((i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    {`${i + 1}º Semestre`}
                  </SelectItem>
                ))}
              </Select>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      {/* <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem className="mt-1">
              <FormControl>
                <Input
                  {...field}
                  isRequired
                  label="Stock"
                  labelPlacement="outside"
                  placeholder="Stock"
                  variant="faded"
                  radius="sm"
                  classNames={{
                    label: "font-medium z-0",
                    inputWrapper:
                      "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50",
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {(["basePrice", "offerPrice"] as const).map((item, i) => (
          <FormField
            key={i}
            control={form.control}
            name={item}
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormControl>
                  <Input
                    {...field}
                    isRequired
                    label={item.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    labelPlacement="outside"
                    placeholder={item.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    variant="faded"
                    radius="sm"
                    classNames={{
                      label: "font-medium capitalize z-0",
                      input: "placeholder:capitalize",
                      inputWrapper:
                        "border border-slate-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/50",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ProductDetails;
