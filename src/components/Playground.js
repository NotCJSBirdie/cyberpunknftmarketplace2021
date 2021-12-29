import React from "react";

const Playground = () => {
  return (
    <div>
      <div class="flex flex-row ">
        <div class="flex flex-col overflow-visible p-0 flex-none w-32 h-auto bg-red-400">
          <div class="bg-cyan-500 m-2">Hello</div>
          <div class=" bg-cyan-500">Hello</div>
          <div class=" bg-cyan-500">Hello</div>
          <div class="bg-cyan-500">Hello</div>
        </div>
        <div class="p-0 grow h-auto bg-orange-400">02</div>
        <div class="p-0 flex-none w-24 h-auto bg-teal-600">03</div>
      </div>
    </div>
  );
};

export default Playground;
