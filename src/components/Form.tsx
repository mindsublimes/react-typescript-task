import { ChangeEvent, FormEvent, useState } from 'react';
import { generateRandomCode } from '../utils/form.util';
import { useSelector } from '../store';
import { useDispatch } from 'react-redux';
import { updateValue } from '../store/slices/form.slice';
import { DISCOUNT_CODE_LENGTH } from '../constants/form.constant';

export const Form = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  // To store value locally of discount code input field
  const [discountCode, setDiscountCode] = useState('');

  /**
   * Handles change events on the form fields
   *
   * If field is discount, update local state,
   * else update redux store state of app reducer
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name;
    const value = e.target.value;

    if (field === 'discount') {
      setDiscountCode(e.target.value);
    } else if (field === 'option' || field === 'notes') {
      dispatch(updateValue({ field, value }));
    }
  };

  /** Handle form submission */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-8 p-6 border border-gray-300 shadow-md rounded-md"
    >
      {/* Radio selection buttons */}
      <div className="flex flex-col gap-2">
        <p className="text-lg">Select Option</p>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <input
              id="optionA"
              name="option"
              type="radio"
              required
              value="a"
              onChange={handleChange}
            />
            <label htmlFor="optionA">Option A</label>
          </div>
          <div className="flex gap-1">
            <input
              id="optionB"
              name="option"
              type="radio"
              required
              value="b"
              onChange={handleChange}
            />
            <label htmlFor="optionB">Option B</label>
          </div>
          <div className="flex gap-1">
            <input
              id="optionC"
              name="option"
              type="radio"
              required
              value="c"
              onChange={handleChange}
            />
            <label htmlFor="optionC">Option C</label>
          </div>
        </div>
      </div>

      {/* Textbox for discount code entry and button to simulate discount code generation */}
      <div className="flex flex-col gap-2">
        <label htmlFor="discount" className="text-lg">
          Enter Discount Code
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Textbox */}
          <input
            id="discount"
            type="text"
            name="discount"
            pattern={`[A-Z0-9]{${DISCOUNT_CODE_LENGTH}}`}
            title="The code must be 9 characters long, using uppercase letters and digits only."
            placeholder="Discount code"
            value={discountCode}
            onChange={handleChange}
            className="w-full sm:w-auto border border-gray-400 p-2 rounded-md focus-visible:outline-gray-400"
          />
          {/* Button to generate random code */}
          <button
            type="button"
            onClick={() => setDiscountCode(generateRandomCode())}
            className="w-full sm:w-max border border-gray-400 py-2 px-4 rounded-md hover:bg-gray-200"
          >
            Generate Code
          </button>
        </div>
      </div>

      {/* Basic note field */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="notes" className="text-lg">
          Write your notes:
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Your notes..."
          required
          value={formState.notes}
          onChange={handleChange}
          className="border border-gray-400 w-full px-2 py-1 rounded-md focus-visible:outline-gray-400"
          rows={4}
        />
      </div>

      {/* Button to submit form */}
      <button
        type="submit"
        className="max-w-max border border-gray-400 py-2 px-4 rounded-md hover:bg-gray-200"
      >
        Submit
      </button>
    </form>
  );
};
