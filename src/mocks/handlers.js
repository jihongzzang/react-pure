import { rest } from 'msw';

export const handlers = [
  rest.put('http://localhost:3000/counter/increment', async (req, res, ctx) => {
    //const value = req.body.value;
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get('http://localhost:3000/api/user/:userId', async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `jihong(${userId})`,
      })
    );

    // return res(ctx.status(400));
  }),

  rest.get('http://localhost:3000/todo', async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: { task: 'Todo from server' },
      })
    );
  }),
  rest.get('http://localhost:3000/counter', async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get('/login', async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.get(
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json',
    async (req, res, ctx) => {
      const id = req.url.searchParams.get('id');

      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Data not Found',
        })
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: id,
        //         age: 30,
        //       },
        //       {
        //         name: 'typeScript',
        //         age: 30,
        //       },
        //       {
        //         name: 'nextJS',
        //         age: 30,
        //       },
        //       {
        //         name: 'vueJS',
        //         age: 30,
        //       },
        //       {
        //         name: 'javaScript',
        //         age: 30,
        //       },
        //     ],
        //   },
        // })
      );
    }
  ),
];
