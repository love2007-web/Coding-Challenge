/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../layout/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { Listbox, Transition } from "@headlessui/react";
import { nanoid } from "nanoid";
import { Dialog } from "@headlessui/react";
import SEO from "../components/Seo";
import appService from "../services/app";
import authService from "../services/auth";
import { toast } from "react-toastify";
import validator from "validator";
import HttpErrorException from "../utils/HttpErrrorException";

export default function Register() {
  return (
    <>
      <SEO
        title="Register"
        description="Registration Page for GetLinked Pre Hackathon Project"
      />
      <div className="bg-bgdark min-h-[100vh] overflow-hidden">
        <div className="hidden lg:block">
          <Navbar buttonType="gradient" />
        </div>
        <Container className="relative">
          <img
            src="/icons/star-purple.svg"
            alt="Star Purple"
            className="absolute animate-pulse w-[14px] h-[13px] lg:w-[21px] lg:h-[25px] right-[15%] lg:right-0 lg:left-[60px] top-[13%] lg:top-[10%] pointer-events-none"
          />
          <img
            src="/icons/star-grey.svg"
            alt="Star Grey"
            className="w-[16px] animate-pulse h-[20px] lg:w-[26px] lg:h-[32px] absolute left-[2%] top-[40%] lg:top-[70%] lg:left-[80px] pointer-events-none"
          />
          <div className="py-10 lg:py-20 grid lg:grid-cols-2 gap-10 justify-between">
            <figure className="hidden lg:block">
              <img src="/images/graphic-designer.svg" alt="" className="" />
            </figure>
            <RegisterForm />
          </div>
        </Container>
      </div>
    </>
  );
}

const RegisterForm = () => {
  let [loading, setLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [checked, setChecked] = useState(false);
  const [category, setCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const groups = [
    { id: nanoid(), name: "1" },
    { id: nanoid(), name: "2" },
    { id: nanoid(), name: "3" },
    { id: nanoid(), name: "4" },
    { id: nanoid(), name: "5" },
    { id: nanoid(), name: "6" },
    { id: nanoid(), name: "7" },
    { id: nanoid(), name: "8" },
    { id: nanoid(), name: "9" },
    { id: nanoid(), name: "10" },
    { id: nanoid(), name: "11" },
    { id: nanoid(), name: "12" },
    { id: nanoid(), name: "13" },
    { id: nanoid(), name: "14" },
    { id: nanoid(), name: "15" },
    { id: nanoid(), name: "16" },
    { id: nanoid(), name: "17" },
    { id: nanoid(), name: "18" },
    { id: nanoid(), name: "19" },
    { id: nanoid(), name: "20" },
  ];
  const [selectedGroups, setSelectedGroups] = useState(null);

  console.log(category);

  function closeModal() {
    console.log(isOpen);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    project_topic: "",
  });

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    appService
      .getCategory()
      .then((data) => {
        console.log(data);
        setCategory(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.phone_number ||
      !formData.team_name ||
      !formData.project_topic ||
      !selectedGroups?.name ||
      !selectedCategory?.id
    ) {
      return toast.error("All input fields are required");
    }

    if (!checked) {
      return toast.error("Ensure you have accepted our terms and conditions");
    }

    if (!validator.isEmail(formData.email)) {
      return toast.error(
        "Invalid email address. Check your email address and try again"
      );
    }

    const payload = {
      email: formData.email,
      phone_number: formData.phone_number,
      team_name: formData.team_name,
      group_size: selectedGroups?.name,
      project_topic: formData.project_topic,
      category: selectedCategory?.id,
      privacy_poclicy_accepted: checked,
    };

    console.log(payload);
    setLoading(true);
    authService
      .register(payload)
      .then((data) => {
        setSelectedCategory(null);
        setSelectedGroups(null);
        openModal();
      })
      .catch((error) => {
        console.log(error);
        new HttpErrorException(error).trigger();
      })
      .finally(() => setLoading(false));
  };

  console.log(checked);

  return (
    <>
      <div className="w-full lg:max-w-[740px] pt-0 pb-16 lg:py-16 lg:px-6 rounded-lg lg:bg-[#ffffff08] lg:shadow-[0px_4px_4px_0px] #00000040] relative col-span-2 lg:col-start-2">
        <img
          src="/icons/star-purple.svg"
          alt="Star Purple"
          className="absolute animate-pulse w-[14px] lg:w-[23px] h-[18px] lg:h-[28px] lg:w-auto lg:h-auto left-[-70px] bottom-[30%] pointer-events-none"
        />
        <img
          src="/icons/star-grey.svg"
          alt="Star Grey"
          className="hidden animate-pulse lg:block absolute w-[12px] lg:w-[26px] h-[14px] lg:h-[32px] lg:w-auto lg:h-auto right-[140px] top-[20px] pointer-events-none"
        />
        <img
          src="/icons/star-white.svg"
          alt="Star White"
          className="hidden animate-pulse lg:block absolute w-[10px] h-[12px] lg:right-[80px] bottom-[-12px] pointer-events-none"
        />
        <img
          src="/icons/star-purple.svg"
          alt="Star White"
          className="lg:hidden animate-pulse absolute w-[10px] h-[12px] right-[-12px] bottom-[29%] pointer-events-none"
        />
        <div className="w-full max-w-[558px] mx-auto">
          <header className="mb-5 relative z-10">
            <h1 className="text-primary font-[ClashDisplay] text-[32px] mb-8 font-semibold">
              Register
            </h1>
            <figure className="block lg:hidden mb-5 ">
              <img
                src="/images/graphic-designer.svg"
                alt=""
                className="relative z-10 max-w-[195px] max-h-[155px] mx-auto"
              />
            </figure>
            <div className="text-white flex mb-8">
              <p className="self-end -mb-[7px]">
                Be part of this movement! &nbsp;
              </p>
              <span className="border-b-[1px] w-[101px] inline-block border-b-primary border-dashed ">
                <div className="flex justify-center">
                  <img
                    src="/icons/emoji-female.svg"
                    alt="Female emoji"
                    className="inline-block"
                  />
                  <img
                    src="/icons/emoji-male.svg"
                    alt="Male emoji"
                    className="inline-block"
                  />
                </div>
              </span>
            </div>
            <div className="text-white">
              <h1 className="text-[24px] text-white mb-8">
                CREATE YOUR ACCOUNT
              </h1>
            </div>
          </header>
          <p className="lg:hidden text-white mb-8 text-[12px]">
            Email us below to any question related to our event
          </p>
          <form onSubmit={submit}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 pb-8">
              <fieldset>
                <label className="inline-block mb-2 text-white text-[13px]">
                  Team&rsquo;s Name
                </label>
                <Input
                  name="team_name"
                  value={formData.team_name}
                  onChange={formDataHandler}
                  placeholder="Enter the name of the group"
                  className="placeholder-[#FFFFFF40] text-[14px]"
                />
              </fieldset>
              <fieldset>
                <label className="inline-block mb-2 text-white text-[13px]">
                  Phone
                </label>
                <Input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={formDataHandler}
                  placeholder="Enter your phone number"
                  className="placeholder-[#FFFFFF40] text-[14px]"
                />
              </fieldset>
              <fieldset>
                <label className="inline-block mb-2 text-white text-[13px]">
                  Email
                </label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={formDataHandler}
                  placeholder="Enter your email address"
                  className="placeholder-[#FFFFFF40] text-[14px]"
                />
              </fieldset>
              <fieldset>
                <label className="inline-block mb-2 text-white text-[13px]">
                  Project Topic
                </label>
                <Input
                  name="project_topic"
                  value={formData.project_topic}
                  onChange={formDataHandler}
                  placeholder="What is your group project topic"
                  className="placeholder-[#FFFFFF40] text-[14px]"
                />
              </fieldset>
            </div>
            <div className="pb-8 flex lg:flex-row gap-2 lg:gap-10">
              <fieldset className="flex-1">
                <div>
                  <label className="inline-block mb-2 text-[13px] text-white">
                    Category
                  </label>
                </div>
                <Listbox
                  value={category}
                  as="div"
                  onChange={setSelectedCategory}
                  className="relative z-10"
                >
                  {({ open }) => (
                    <>
                      <div className="flex justify-between gap-2 pr-2 h-[47px] w-full bg-transparent border-[1px] border-white rounded-md">
                        <Listbox.Button className="pl-3 lg:pl-6 text-[14px] text-left h-full text-white flex-1">
                          {selectedCategory?.name ? (
                            selectedCategory.name
                          ) : (
                            <p className="line-clamp-3">Select your category</p>
                          )}
                        </Listbox.Button>
                        <div className="w-[24px] h-full grid place-items-center">
                          <span className="material-icons text-white">
                            {" "}
                            {open ? "expand_less" : "expand_more"}{" "}
                          </span>
                        </div>
                      </div>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 bg-white w-full rounded-md mt-2 overflow-x-hidden max-h-[150px] custom-scroll-bar">
                          {category?.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              value={person}
                              disabled={person.unavailable}
                              className="py-[8px] px-6 cursor-pointer hover:bg-primary hover:bg-opacity-70 text-[14px] border-b-[1px] border-b-[#ccc]"
                            >
                              {person.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </>
                  )}
                </Listbox>
              </fieldset>
              <fieldset className="lg:flex-1">
                <div>
                  <label className="inline-block mb-2 text-white text-[13px]">
                    Group Size
                  </label>
                </div>
                <Listbox
                  value={groups}
                  as="div"
                  onChange={setSelectedGroups}
                  className="relative z-10"
                >
                  {({ open }) => (
                    <>
                      <div className="flex justify-between gap-2 pr-2 h-[47px] w-full bg-transparent border-[1px] border-white rounded-md">
                        <Listbox.Button className="pl-3 lg:pl-6 text-[14px] h-full text-left text-white flex-1">
                          {selectedGroups?.name
                            ? selectedGroups.name
                            : "Select"}
                        </Listbox.Button>
                        <div className="w-[24px] h-full grid place-items-center">
                          <span className="material-icons text-white">
                            {" "}
                            {open ? "expand_less" : "expand_more"}{" "}
                          </span>
                        </div>
                      </div>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Listbox.Options className="z-10 absolute bg-white w-full rounded-md mt-2 overflow-x-hidden max-h-[150px] overflow-y-auto custom-scroll-bar">
                          {groups.map((group) => (
                            <Listbox.Option
                              key={group.id}
                              value={group}
                              className="py-[8px] px-6 cursor-pointer hover:bg-primary hover:bg-opacity-70 text-[14px] border-b-[1px] border-b-[#ccc]"
                            >
                              {group.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </>
                  )}
                </Listbox>
              </fieldset>
            </div>
            <div className="mb-8">
              <p className="text-[#FF26B9] mb-4">
                Please review your registration details before submitting
              </p>
              <div className="flex gap-3 items-center">
                <Checkbox checked={checked} setChecked={setChecked} />
                <p className="text-white relative z-2">
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
            <Button
              className="lg:!w-full mx-auto lg:mx-0"
              loading={loading}
              onClick={submit}
            >
              Register Now
            </Button>
          </form>
        </div>
        <img
          src="/images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="absolute animate-pulse pointer-events-none top-[4%] min-[500px]:top-[-5%] min-[768px]:top-[-10%] left-[-10%] lg:top-[-20%] lg:left-[-130%] mix-blend-hard-light"
        />
        <img
          src="/images/purple-lens-flare-right.svg"
          alt="purple lens flare"
          className="absolute animate-pulse pointer-events-none lg:bottom-[-20%] lg:right-[-50%] mix-blend-hard-light"
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#150e28ed]" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-12 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[669px] transform rounded-[4px] bg-transparent border-[1px] border-primary px-6 pt-4 pb-8 lg:pb-16 lg:px-12 text-left align-middle shadow-xl transition-all relative">
                  <img
                    src="/icons/star-purple.svg"
                    alt="Star Purple"
                    className="absolute animate-pulse w-[14px] lg:w-[23px] h-[18px] lg:h-[28px] lg:w-[23px] lg:h-[28px] right-[-5px] lg:right-[-20px] top-[-25px] lg:top-[-20px] pointer-events-none"
                  />
                  <img
                    src="/icons/star-dark-purple.svg"
                    alt="Star Purple"
                    className="absolute animate-pulse w-[14px] lg:w-[23px] h-[18px] lg:h-[28px] lg:w-[21px] lg:h-[25px] right-[40px] lg:right-[30px] bottom-[-35px] lg:bottom-[15px] pointer-events-none"
                  />
                  <header className="grid place-items-center text-center gap-4">
                    <img
                      src="/images/congratulation.svg"
                      alt="Congratulations"
                      className="max-w-[258px] lg:max-w-[472px]"
                    />
                    <Dialog.Title
                      as="h1"
                      className="font-medium lg:text-[32px] font-semibold text-white font-bold"
                    >
                      Congratulations <br /> you have successfully Registered!
                    </Dialog.Title>
                  </header>
                  <div className="mt-4 lg:font-semibold text-[12px] lg:text-[14px] text-white text-center">
                    <p>Yes, it was easy and you did it!</p>
                    <p>
                      check your mail box for next step{" "}
                      <img
                        src="/icons/wink-emoji.svg"
                        alt="Wink Emoji"
                        className="inline"
                      />
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button
                      type="button"
                      className="w-full"
                      onClick={closeModal}
                    >
                      Back
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Checkbox = ({ checked, setChecked }) => {
  const checkedHandler = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      className="w-[14px] h-[14px] shrink-0 mt-[5px] self-start rounded-[2px] border-[1px] border-white"
      onClick={checkedHandler}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="text-white"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </div>
  );
};
