"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Pencil, EyeIcon, Trash2 } from "lucide-react";

interface CourseCardProps {
  color?: string;
  textColor?: string;
  date: string;
  turma: string;
  courseName: string;
  tags: string[];
  numbers: number;
  location: string;
  onDetailsClick: () => void;
}

const CardTurmas: React.FC<CourseCardProps> = ({ tags, ...props }) => {
  const router = useRouter();

  return (
    <div className="w-70 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className={`${props.color} p-4`}>
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-100 rounded-full">
            {props.date}
          </span>
          <Pencil className="h-4 w-4 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-300" />
        </div>
        <h3 className="font-medium text-sm text-gray-800 dark:text-gray-300">
          {props.turma}
        </h3>
        <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
          {props.courseName}
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
        <div>
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {props.numbers} Estudantes
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Estado: {props.location}
          </p>
        </div>
        <div className="flex space-x-1">
          <EyeIcon
            onClick={() => router.push(`turmas/${props.turma}`)}
            width={20}
            className="text-gray-400"
          />
          <Trash2
            onClick={props.onDetailsClick}
            width={20}
            className="text-danger-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CardTurmas;
