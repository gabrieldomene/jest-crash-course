const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  console.log(results)
  return results.data;
}


const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i])
  }
}

it("mock callback", () => {
  const mockCalledback = jest.fn(x => x + 42);

  forEach([0, 1], mockCalledback);

  expect(mockCalledback.mock.calls.length).toBe(2);

  expect(mockCalledback.mock.results[1].value).toBe(43)
})

it("mock return", () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(true);

  const result = mock();
  expect(result).toBeTruthy();
})

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Run agv"
    }
  });

  const results = await fetchData(1)

  expect(results.todo).toBe("Run agv")
})