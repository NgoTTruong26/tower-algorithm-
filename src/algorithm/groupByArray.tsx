import React from "react";

export default function GroupByArray() {
  const test = () => {
    const arr = [
      {
        group: "Group 1",
        name: "Nguyen Van A",
        age: 18,
      },
      {
        group: "Group 1",
        name: "Nguyen Van B",
        age: 16,
      },
      {
        group: "Group 2",
        name: "Nguyen Van C",
        age: 18,
      },
      {
        group: "Group 2",
        name: "Nguyen Van D",
        age: 16,
      },
    ];

    const a = arr.reduce(
      (
        prevs: {
          group: string;
          list: {
            name: string;
            age: number;
          }[];
        }[],
        curr
      ) => {
        if (prevs.length === 0) {
          return [
            {
              group: curr.group,
              list: [
                {
                  name: curr.name,
                  age: curr.age,
                },
              ],
            },
          ];
        }
        let arg: typeof prevs;
        prevs.forEach((value, index) => {
          if (value.group !== curr.group) {
            return (arg = [
              ...prevs,
              {
                group: curr.group,
                list: [{ name: curr.name, age: curr.age }],
              },
            ]);
          }

          prevs[index] = {
            ...prevs[index],
            list: [...value.list, { name: curr.name, age: curr.age }],
          };
          return (arg = prevs);
        });
        return [...arg!];
      },
      []
    );
    return a;
  };
  console.log(test());
  return <div>groupByArray</div>;
}
