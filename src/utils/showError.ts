import { toast } from "sonner";

export const showError = (error: unknown) => {
  let message = "Something went wrong. Please try again.";

  // If the error is an Error instance
  if (error instanceof Error) {
    try {
      const json = JSON.parse(error.message);
      if (json?.message) message = json.message;
    } catch {
      // Fallback to default error message
      message = error.message || message;
    }
  }
  toast.error(message);
};