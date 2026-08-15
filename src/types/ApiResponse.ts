export default interface ApiResponse<D>{
    status: string;
    code: number;
    message: string;
    data: D;
}