import axios from "axios";
import { OrderType, SortType } from "../store/useStore";

interface GetTagsType {
  page: number;
  pageSize: number;
  order: OrderType;
  sort: SortType;
}

export interface ItemData {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}

interface ResponseData {
  has_more: boolean;
  items: ItemData[];
  quota_max: number;
  quota_remaining: number;
}

export const getTags = async ({
  page,
  pageSize,
  order,
  sort,
}: GetTagsType): Promise<ResponseData> => {
  const response = await axios.get(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
  );

  return response.data;
};
