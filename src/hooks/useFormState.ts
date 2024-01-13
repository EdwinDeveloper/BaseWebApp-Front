import { useState, ChangeEvent } from 'react';
import useCallbackCreator from 'use-callback-creator';

interface FormState {
  [key: string]: any;
}

interface FormStateFunctions {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  handleInputChange: (name: string, e: ChangeEvent<HTMLInputElement>) => void;
  handleSimpleChange: (name: string, value: any) => void;
}

const useFormState = (initialState: FormState = {}): FormStateFunctions => {
  const [form, setForm] = useState<FormState>(initialState);

  const handleInputChange = useCallbackCreator(
    (name: string, e: ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [name]: e.target.value });
    },
    [form]
  );

  const handleSimpleChange = useCallbackCreator(
    (name: string, value: any) => setForm({ ...form, [name]: value }),
    [form]
  );

  return {
    form,
    setForm,
    handleInputChange,
    handleSimpleChange,
  };
};

export default useFormState;