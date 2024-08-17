const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request "${JSON.stringify(request)}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
