import ErrorIcon from "../ErrorIcon";

const Error = () => {
  return (
    <div className="flex justify-center items-center gap-[10px] px-6 py-4 bg-[#0F1318] rounded-[5px]">
      <ErrorIcon />
      <span>Ошибка: не удалось загрузить информацию</span>
    </div>
  );
};

export default Error;
