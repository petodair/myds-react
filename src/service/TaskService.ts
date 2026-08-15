import axios from "axios";
import type Task from "../types/Task";
import type ApiResponse from "../types/ApiResponse";

export function mockTasks(): Task[] {
  return [
    {
      id: 1,
      hour: "9:00",
      title: "Caminhada para acordar",
      description: "Caminhar um pouco para acordar bem acordado",
      checked: true,
    },
    {
      id: 2,
      hour: "10:00",
      title: "Limpar meu quarto",
      description:
        "Devo fazer uma faxina básica antes do almoço, " +
        "como arrumar a cama, limpar o chão e se for " +
        "preciso o guarda roupa(provavelmente vai ser preciso, parece que passou um tufão lá)",
      checked: false,
    },
    {
      id: 3,
      hour: "11:00",
      title: "Começar a preparar o almoço",
      description:
        "Se não acabei de arrumar o quarto, " +
        "devo fazer mesmo assim uma pausa para o rango e descansar um pouco",
      checked: false,
    },
    {
      id: 4,
      hour: "15:00",
      title: 'Ler livro "Java Como Programar"',
      description:
        "Ler no mínimo 1 capítulo, deve levar entre meia hora e quarenta minutos" +
        " fazer algumas pausas para o cérebro não fritar",
      checked: false,
    },
    {
      id: 5,
      hour: "16:30",
      title: "Brincar com o cachorro",
      description: "Correr um pouco vai fazer bem pra mim e pra ele",
      checked: false,
    },
    {
      id: 6,
      hour: "17:00",
      title: "Programar",
      description: "Opa! Hora de colocar a mão na massa!",
      checked: false,
    },
  ];
}

export async function fetchTasks(): Promise<Task[]> {
  try {
    const response = await axios.get("http://localhost:8080/v1/tasks");
    const apiResponse: ApiResponse<Task[]> = response.data;
    console.log(apiResponse.message);
    return apiResponse.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function saveTask(
  task: Omit<Task, "id" | "checked" | "daysOfWeek">,
) {
  try {
    await axios.post("http://localhost:8080/v1/tasks", task);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTask(id: number) {
  try {
    await axios.delete("http://localhost:8080/v1/tasks/" + id);
  } catch (error) {
    console.error(error);
  }
}

export async function updateTask(task: Task, id: number): Promise<Task> {
  try {
    const response = await axios.put(
      "http://localhost:8080/v1/tasks/" + id,
      task,
    );
    const apiResponse: ApiResponse<Task> = response.data;
    return apiResponse.data;
  } catch (error) {
    console.log(error);
    return task;
  }
}
