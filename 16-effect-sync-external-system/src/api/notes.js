const ENDPOINT = 'http://127.0.0.1:8090';
const REQUEST_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/** @type {(newNote: { title: string, description: string })} */
export async function createNote(newNote) {
  // 외부 시스템(서버)에 데이터 생성 요청
  // POST 요청 URL
  const REQUEST_URL = `${ENDPOINT}/api/collections/events/records`;
  // POST 요청 시, 전송할 JSON 포멧 문자열
  const body = JSON.stringify({
    title: newNote.title,
    description: newNote.description,
  });

  // 서버에서 응답
  const response = await fetch(REQUEST_URL, {
    method: 'POST',
    body,
    ...REQUEST_OPTIONS,
  });

  // 에러 핸들링
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}

/** @type {(page: {page: number, perPage: number}) => Promise<any>} */
export async function readNotes(page = 1, perPage = 10) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/events/records?page=${page}&perPage=${perPage}`;

  const response = await fetch(REQUEST_URL);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}

/** @type {(noteId: string) => Promise<any>} */
export async function readNoteOne(noteId) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/events/records/${noteId}`;

  const response = await fetch(REQUEST_URL);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}

/** @type {(editNote: {id: string, title:string, description: string}) => Promise<any>} */
export async function updateNote(editNote) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/events/records/${editNote.id}`;
  const body = JSON.stringify({
    title: editNote.title,
    description: editNote.description,
  });

  const response = await fetch(REQUEST_URL, {
    method: 'PATCH',
    body,
    ...REQUEST_OPTIONS,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }

  return response;
}

/** @type {(deleteId: string)} => Promise<any>} */

export async function deleteNote(deleteId) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/events/records/${deleteId}`;

  const response = await fetch(REQUEST_URL, {
    method: 'DELETE',
    ...REQUEST_OPTIONS,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }

  return response;
}
