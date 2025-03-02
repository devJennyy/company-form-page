import { useEffect, useRef, useState } from "react";
import SharedButton from "./SharedButton";
import { inputFields } from "@/constants/FormFields";

const Form = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const firstNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  const handleChange = (label: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  return (
    <div className="w-full xl:max-w-[520px] flex flex-col gap-7 xl:py-8 py-10 md:px-8 px-5 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
      <p className="md:text-[2rem] text-2xl">Download the guide</p>

      <div className="flex flex-col gap-5">
        {inputFields?.map((item, index) => (
          <div key={index}>
            {item.groupInput ? (
              <div className="flex md:flex-row flex-col gap-5">
                {item.groupInput.map((groupItem, idx) => (
                  <div key={idx} className="relative w-full group focus-within">
                    <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-focus-within:opacity-100 transition-default">
                      {groupItem.label}
                    </div>
                    <input
                      ref={
                        groupItem.label === "First name" ? firstNameRef : null
                      }
                      placeholder={groupItem.placeholder}
                      value={formData[groupItem.label] || ""}
                      onChange={(e) =>
                        handleChange(groupItem.label, e.target.value)
                      }
                      className="w-full h-14 pl-4 border border-offWhite rounded-lg outline-none bg-offWhite focus:bg-transparent focus:border-[#5551FF] focus:placeholder:text-white transition-default"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative w-full group focus-within">
                <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-focus-within:opacity-100 transition-default">
                  {item.label}
                </div>
                <input
                  placeholder={item.placeholder}
                  value={formData[item.label] || ""}
                  onChange={(e) => handleChange(item.label, e.target.value)}
                  className="w-full h-14 pl-4 border border-offWhite rounded-lg outline-none bg-offWhite focus:bg-transparent focus:border-[#5551FF] focus:placeholder:text-white transition-default"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-gray text-left text-[13px]">
        By completing and submitting this form, you agree that Writer may email
        or call you with product updates, educational resources, and other
        promotional information. To learn more about how Writer uses your
        information, see our
        <span className="!ml-1 text-brand font-medium">Privacy Policy.</span>
      </p>

      <SharedButton fullWidth={true} />
    </div>
  );
};

export default Form;
