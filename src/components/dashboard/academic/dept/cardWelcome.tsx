"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface SummaryItem {
  icon: ReactNode;
  label: string;
}

interface GenericCardProps {
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
  summary: SummaryItem[];
  buttonText: string;
  buttonLink: string;
}

export default function GenericCard({
  title,
  description,
  imageUrl,
  iconUrl,
  summary,
  buttonText,
  buttonLink,
}: GenericCardProps) {
  const router = useRouter();

  return (
    <div className="w-full px-0">
      <Card isFooterBlurred className="w-full h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
          <h4 className="text-white/90 font-medium text-xl">{description}</h4>
        </CardHeader>

        <Image
          removeWrapper
          alt="Imagem de fundo"
          className="z-0 w-full h-full object-cover"
          src={imageUrl}
        />

        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Ícone"
              className="rounded-full w-10 h-11 bg-black"
              src={iconUrl}
            />
            <div className="flex flex-col text-white">
              <p className="text-tiny text-white/60">Resumo</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {Array.isArray(summary) &&
                  summary.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            className="bg-msprimary text-white"
            onClick={() => router.push(buttonLink)}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
