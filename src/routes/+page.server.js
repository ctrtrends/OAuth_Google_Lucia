import { fail, redirect } from "@sveltejs/kit";
import { lucia } from "$lib/server/auth";

export const load = async (event) => {
  if (!event.locals.user) {
    return redirect(302, "/login");
  }
  return {
    user: event.locals.user,
  };
};

export const actions = {
  default: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await lucia.invalidateSession(event.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes,
    });
    return redirect(302, "/login");
  },
};
