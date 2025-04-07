import comments from "@/app/data/comments";

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const comment = await request.json();
    const commentId = parseInt(params?.id);
    const commentIndex = comments.findIndex((comment) => comment?.id === commentId
    );

    comments[commentIndex].text = comment?.text; 

    return Response.json(comments);

}


export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const commendId = parseInt(params?.id);

    const commentIndex = comments?.findIndex((comment) => comment?.id === commendId)
    const deleteComment = comments[commentIndex];

    comments.splice(commentIndex, 1);

    return Response.json(comments);
}


export async function GET(request: any) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if(query) {
        const filterComments = comments.filter((comment) => comment.text.toLowerCase().includes(query));

        return Response.json(filterComments);
    }

    return Response.json(comments);

}