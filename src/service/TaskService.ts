import axios from "axios";
import type Task from "../types/Task";
import type ApiResponse from "../types/ApiResponse";

const API_URL: string = "https://api.petercode.com.br/v1/tasks";

export async function fetchTasks(): Promise<Task[]> {
  try {
    const response = await axios.get(API_URL);
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
    await axios.post(API_URL, task);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTask(id: number) {
  try {
    await axios.delete(API_URL + "/" + id);
  } catch (error) {
    console.error(error);
  }
}

export async function updateTask(task: Task, id: number): Promise<Task> {
  try {
    const response = await axios.put(API_URL + "/" + id, task);
    const apiResponse: ApiResponse<Task> = response.data;
    return apiResponse.data;
  } catch (error) {
    console.log(error);
    return task;
  }
}

export async function generateTaskPdf() {
  try {
    const resposta = await axios.get(
      "https://api.petercode.com.br/v1/reports/tasks",
      {
        responseType: "blob", // Essencial para arquivos binários
      },
    );

    // Cria um blob com os dados do PDF
    const blob = new Blob([resposta.data], { type: "application/pdf" });

    // Cria uma URL temporária para o blob
    const url = window.URL.createObjectURL(blob);

    // Cria um elemento <a> invisível para forçar o download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "meu-arquivo.pdf"); // Nome do arquivo baixado
    document.body.appendChild(link);

    // Dispara o clique e limpa o objeto
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (erro) {
    console.error("Erro ao baixar o PDF:", erro);
  }
}
