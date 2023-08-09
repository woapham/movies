type MediaType = "movie" | "tv";

interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: MediaType;
  // details
  homepage?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  status?: string;
  genres?: Genre[];
  production_companies?: any[];
  networks?: any[];
  episode_run_time?: number[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  videos?: {
    results: Video[];
  };
  credits?: {
    cast: Person[];
    crew: Person[];
  };
  images?: {
    backdrops: Image[];
    posters: Image[];
  };
  recommendations?: {
    results: Media[];
  };
  external_ids?: ExternalIds;
  // cast
  character?: string;
}

interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  popularity: number;
  cast_id?: number;
  media_type?: "person";
  job?: string;
  character?: string;
  credit_id: string;
  order: number;
  // details
  also_known_as?: string[];
  birthday?: string;
  place_of_birth?: string;
  homepage?: string;
  biography?: string;
  external_ids?: ExternalIds;
  combined_credits?: {
    cast?: Media[];
    crew?: Media[];
  };
  images?: {
    profiles: Image[];
  };
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface ExternalIds {
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
  linkedin_id?: string;
  github_id?: string;
  email?: string;
  homepage?: string;
}

interface PageResult<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

type Query =
  | "top_rated"
  | "on_the_air"
  | "airing_today"
  | "popular"
  | "now_playing"
  | "upcoming"
  | "trending";

interface QueryItem {
  type: MediaType;
  title: string;
  query: string;
}

interface Credits {
  cast: Media[];
}