function get_strings($city) {
  $arr = array_count_values(str_split(str_replace(' ', '', strtolower($city))));
  foreach($arr as $char => &$count) {
    $count = $char.':'.str_repeat('*', $count);
  }
  return implode(',', $arr);
}
