import { rest } from 'msw';

export const handlers = [
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