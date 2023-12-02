const { res, teamCaptain, sampleError, getData, promiseSample } = require("./app")

test("property value check", () => {
    expect(res).toEqual({ name: "Paul", age: 27, career: "comedian" })
})

test("single property value check", () => {
    expect(res.name).toEqual("Paul")
})

test("check if property exists", () => {
    expect(res).toHaveProperty("career")
})

test("if captain america exists", () => {
    expect(teamCaptain).toContain("Captain America")
})

test("", () => {
    const value = "lasjkfracecarldkjfbrandon"
    expect(value).toContain("brandon")
})

test("if fx throws an error", () => {
    expect(() => sampleError()).toThrow("Sample random error")
})

test("data from an API", async () => {
    const data = await getData()
    expect(Object.keys(data).length).not.toBe(0)
})

test("if pokemon is pikachu", async () => {
    const data = await getData()
    expect(data.name).toContain("pikachu")
})

test("if promise resolves", () => {
    // const data = await promiseSample()
    expect(promiseSample()).resolves.toBe("Promise resolved yo")
})