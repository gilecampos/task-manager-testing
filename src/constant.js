export const constants = {
  error: {
    id: {
      required: "The 'id' field is required.",
      invalid: "The 'id' field must be a valid identifier.",
    },
    taskTitle: {
      required: "The 'task title' field is required.",
      invalidCharacter: "Invalid character found in the 'task title' field.",
      tooShort: "The 'task title' field must be at least 3 characters long.",
      tooLong: "The 'task title' field must not exceed 100 characters.",
    },
    description: {
      required: "The 'description' field is required.",
      tooShort: "The 'description' field must be at least 10 characters long.",
      tooLong: "The 'description' field must not exceed 500 characters.",
    },
    dueDate: {
      required: "The 'due date' field is required.",
      invalid: "The 'due date' field must be a valid date.",
      pastDate: "The 'due date' field cannot be a past date.",
    },
    creationDate: {
      required: "The 'creation date' field is required.",
      invalid: "The 'creation date' field must be a valid date.",
    },
    general: {
      unknownError: "An unknown error occurred. Please try again.",
      networkError: "Network error. Please check your internet connection and try again.",
    },
  },
};

