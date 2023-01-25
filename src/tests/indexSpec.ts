import app from "../index";
import supertest from "supertest";


const request = supertest(app);

describe('image processing testing', () => {

    describe('/imageprocessing', () => {

        it('missing all arguments', async () => {
            const response = await request.get('/imageprocessing');
            expect(response.status).toBe(400);
            expect(response.text).toBe("Image not found, write a right name");

        });

        it('send all the arguments', async () => {
            const response = await request.get('/imageprocessing/?imageName=encenadaport.jpg&width=200&height=200');
            expect(response.status).toBe(200);
        });

        it('wrong image name', async () => {
            const response = await request.get('/imageprocessing/?imageName=sea.jpg&width=200&height=200');
            expect(response.status).toBe(400);
            expect(response.text).toBe("Image not found, write a right name");
            
        });



        it('No height', async () => {
            const response = await request.get('/imageprocessing/?imageName=encenadaport.jpg&width=200');
            expect(response.status).toBe(400);
            expect(response.text).toBe("Please Enter the height!");
        });

        it('No width', async () => {
            const response = await request.get('/imageprocessing/?imageName=encenadaport.jpg');
            expect(response.status).toBe(400);
            expect(response.text).toBe("Please Enter the width!");
            
        });

        it('wrong path', async () => {
            const response = await request.get('/img');
            expect(response.status).toBe(404);
        });

    });


});

// describe('path not found', () => {
//     it('gets the api', async (done) => {
//         const response = await request.get('/img');
//         expect(response.status).toBe(404);
//         done();
//     }
// )});

