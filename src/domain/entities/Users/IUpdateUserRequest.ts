export type IUpdateUserRequest = {
    id: string,
    name?: string;
    email?: string;
    telegramName?: string;
    rol?: "simpatizante" | "miembro" | "directivo";
}