import re

def domain_name(url):
    return re.findall('(\w+://www.|\w+://|www.|)([\w\-]+)', 
                 url)[0][1]

assert domain_name("google.com") == "google"
assert domain_name("http://google.co.jp") == "google"
assert domain_name("www.xakep.ru") == "xakep"
assert domain_name("https://youtube.com") == "youtube"
assert domain_name("https://www.youtube.com") == "youtube"

print('assertions passed')

# better solution from other user:
def domain_name_improved(url):
    # return re.search('(https?://)?(www\d?\.)?(?P<name>[\w-]+)\.', url).group('name')
    # s optional, https:// optional, www. optional, return group name char/numbers/_/- occuring one or more times
    return re.search('(https?://)?(www\.)?(?P<name>[\w-]+)', url).group('name')

assert domain_name_improved("google.com") == "google"
assert domain_name_improved("http://google.co.jp") == "google"
assert domain_name_improved("www.xakep.ru") == "xakep"
assert domain_name_improved("https://youtube.com") == "youtube"
assert domain_name_improved("https://www.youtube.com") == "youtube"
assert domain_name_improved('a-fairlie.biz') == 'a-fairlie'

print('second assertions passed')