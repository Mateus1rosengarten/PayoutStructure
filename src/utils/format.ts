export const formatDate = (date: string | undefined): string => {
  if (!date) return "";
  return new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatPrice = (price: number): string => {
  if (!price) return "";
  return String(price).replace(".", ",");
};

export const validateAmount = (value: string, max: number = 100000): string => {
  return Number(value) > max ? value.slice(0, -1) : value;
};

export const validateName = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  const regex = /^[a-zA-Z\s]*$/;

  if (!regex.test(value)) {
    e.target.value = value.replace(/[^a-zA-Z\s]/g, "");
  }

  if (e.target.value.length > 40) {
    e.target.value = e.target.value.slice(0, 40);
  }
};
