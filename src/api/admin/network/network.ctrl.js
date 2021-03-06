import * as NetworkApi from 'lib/dockerApi/network';
import Joi from 'joi';

export const getNetworkList = async ctx => {
  const { endpoint: { url } } = ctx.state.user;
  try {
      const data = await NetworkApi.getNetworkList(url);
      ctx.status = 200;
      ctx.body = { result: data };
  } catch(e) {
      ctx.throw(e, 500);
  }
}

export const getNetworkInfo = async ctx => {
  const { endpoint: { url } } = ctx.state.user;
  const { id } = ctx.params;
  try {
      const data = await NetworkApi.getNetworkInfo(url, id);
      ctx.status = 200;
      ctx.body = { result: data };
  } catch(e) {
      ctx.throw(e, 500);
  }
}

export const getNetworkInspectRaw = async ctx => {
    const { endpoint: {url} } = ctx.state.user;
    const { id } = ctx.params;
    try {
        const { data } = await NetworkApi.getNetworkInspectRaw({url, id});
        ctx.status = 200;
        ctx.body = { result: data };
    } catch(e) {
        ctx.throw(e, 500);
    }
}

export const deleteNetwork = async ctx => {
  const { endpoint: {url} } = ctx.state.user;
  const { id } = ctx.params;

  try {
      const { data } = await NetworkApi.deleteNetwork({url, id});
      ctx.status = 200;
      ctx.body = { result: data };
  } catch(e) {
      ctx.throw(e, 500);
  }
}

export const disconnectNetwork = async ctx => {
  const { endpoint: {url} } = ctx.state.user;
  const { id } = ctx.params;
  const form = ctx.request.body;

  try {
      const { data } = await NetworkApi.disconnectNetwork({url, id, form});
      ctx.status = 200;
      ctx.body = { result: data };
  } catch(e) {
      ctx.throw(e, 500);
  }
}

export const createNetwork = async ctx => {
  const { endpoint: {url} } = ctx.state.user;
  const form = ctx.request.body;

  try {
    const { data }  = await NetworkApi.createNetwork(url, form);
    ctx.status = 201;
    ctx.body = { result: data };
  } catch(e) {
      console.log(e.message);
    ctx.throw(e, 500);
  }
}
