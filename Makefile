all:

upload:
	rsync *.html *.js "$$__HOMEPAGE_REMOTE_PATH"/TO_DEL--jquery-callback/
