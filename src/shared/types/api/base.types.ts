export type ApiResponse<TData> = {
  status: number;
  message: string;
  data: TData;
};
